<script>
	import { twMerge } from 'tailwind-merge';
	import Icon from '@iconify/svelte';

	let {
		title = '',
		icon = '',
		minValue = 0,
		maxValue = 100,
		value = 50,
		range = [0, 100],
		unit = 'score'
	} = $props();
	let percentage = $derived((value / maxValue) * 75);
	let isGood = $derived(value > range[0] && value < range[1]);
</script>

<div
	class="flex w-[90%] max-w-[60rem] flex-col items-center justify-center rounded-lg border border-slate-200 p-6 shadow shadow-slate-900/20"
>
	<div class="mb-4 flex w-full items-center justify-between">
		<div class="flex items-center gap-3">
			<Icon {icon} class="hidden text-4xl text-slate-700 md:block" />
			<h2 class="text-xl text-slate-800 md:text-2xl">{title}</h2>
		</div>

		<span class={twMerge('text-2xl', isGood ? 'text-emerald-600' : 'text-red-600')}>
			{value + unit}
		</span>
	</div>

	<div class="w-full">
		<!-- Progress -->
		<div class="mb-2 flex items-center justify-between">
			<span class="text-sm text-gray-700 dark:text-white">{minValue + unit}</span>
			<span class="text-sm text-gray-700 dark:text-white">{maxValue + unit}</span>
		</div>
		<div
			class="flex h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700"
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin={minValue}
			aria-valuemax={maxValue}
		>
			<div
				class={twMerge(
					'flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full  text-center text-xs text-white transition duration-500',
					isGood ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-red-600 dark:bg-red-500'
				)}
				style:width={(value / maxValue) * 100 + '%'}
			></div>
		</div>
		<!-- End Progress -->
	</div>
</div>
