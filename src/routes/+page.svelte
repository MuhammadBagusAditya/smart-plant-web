<script>
	import Navbar from '$lib/components/navbar.svelte';
	import StatusCard from '$lib/components/status-card.svelte';
	import { mqttClient } from '$lib/utils';

	let statuses = $state({
		soilMoisture: 0,
		airHumidity: 0,
		light: 0,
		temperature: 0
	});

	mqttClient.on('message', (topic, message) => {
		let topics = topic.split('/');
		console.log(topic + ' ' + message);
		if (topics[0] === 'status') {
			statuses[topics[1]] = Number.parseFloat(message).toFixed(2);
		}
	});
</script>

<Navbar />

<main class="flex flex-col items-center justify-center gap-4 pb-8">
	<StatusCard
		title="Kelembaban Tanah"
		value={statuses.soilMoisture}
		icon="bi:moisture"
		maxValue={100}
		unit="%"
		range={[40, 60]}
	/>

	<StatusCard
		title="Kelembaban Udara"
		value={statuses.airHumidity}
		icon="bi:wind"
		maxValue={100}
		unit="%"
		range={[40, 60]}
	/>

	<StatusCard
		title="Suhu Lingkungan"
		value={statuses.temperature}
		icon="bi:thermometer-half"
		maxValue={100}
		unit="&deg;c"
		range={[18, 40]}
	/>

	<StatusCard
		title="Kondisi Cahaya"
		value={statuses.light}
		icon="bi:sun"
		maxValue={100}
		unit="%"
		range={[40, 100]}
		formatter={(_value) => {
			return _value > 40 ? 'Terang' : 'Gelap';
		}}
		withUnit={false}
	/>
</main>
