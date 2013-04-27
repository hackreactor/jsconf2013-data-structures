var runner = {
	init: function() {
		// Add runner HTML
		var runnerHTML = '<form id="runner">\
			<label>Test:</label>\
			<select id="runner-variation"></select>\
			<button>Run</button>\
		</form>';
		document.body.insertAdjacentHTML('beforeend', runnerHTML);

		var variationSelect = document.getElementById('runner-variation');

		// Handle form submits
		document.getElementById('runner').onsubmit = function() {
			var variation = variationSelect.value;
			runner.run(variation);
			return false;
		};

		// Add variation selections
		for (var value in runner.variations) {
			var option = document.createElement("option");
			option.value = value
			option.text = runner.variations[value];
			variationSelect.add(option, null);
		};

		var loaded = 0;
		var doStart = function() {
			if (++loaded === runner.specs.length) {
				// Run test specified in hash
				if (window.location.hash) {
					var variation = window.location.hash.slice(1);
					if (runner.variations.hasOwnProperty(variation))
						runner.run(variation);
				}
			}
		};

		// Load scripts
		runner.specs.forEach(function(path) {
			runner.loadScript(path, doStart, false);
		});
	},
	is: function is(variation) {
		return runner.variation === variation;
	},
	startTimeout: function() {
		runner.failTimeout = setTimeout(function() {
			runner.reset();
			alert('Failed to load script!');
		}, 2000);
	},
	clearTimeout: function() {
		clearTimeout(runner.failTimeout);
	},
	loadScript: function(path, callback, removeable) {
		var script = document.createElement('script');
		script.src = path;
		if (removeable)
			script.setAttribute('data-runner-script', true);
		script.onload = callback;
		document.head.appendChild(script);
	},
	runNext: function(variation) {
		// Set hash so reload works
		window.location.hash = variation;

		window.location.reload();
	},
	run: function run(variation) {
		if (!variation || !runner.variations.hasOwnProperty(variation)) return;

		// Set select
		document.getElementById('runner-variation').value = variation;

		// Reload the page if we ran a test already
		if (runner.hasRan)
			runner.runNext(variation);

		// Store variation
		runner.variation = variation;

		// Set hash so reload works
		window.location.hash = variation;

		// Count scripts to load
		var loaded = 0;
		var doRun = function() {
			if (++loaded === runner.scripts.length) {
				runner.clearTimeout();
				mocha.run();
			}
		};

		// Load scripts
		runner.scripts.forEach(function(name) {
			runner.loadScript(variation+'/'+name, doRun, true);
		});

		runner.startTimeout();

		runner.hasRan = true;
	}
};

window.addEventListener('load', runner.init, true);
