<script>
	import { twMerge } from 'tailwind-merge';
	import { isLoading } from '$lib/states';
</script>

<div
	class={twMerge(
		'fixed bottom-0 left-0 right-0 top-0 z-[100] flex-col items-center justify-center gap-3 bg-white',
		$isLoading ? 'flex' : 'hidden'
	)}
>
	<div class="flex h-[4rem] items-center gap-4">
		<span
			class="animate-loading h-[0.75rem] w-[0.75rem] rounded-full bg-slate-800 [animation-delay:_0]"
		></span>
		<span
			class="animate-loading h-[0.75rem] w-[0.75rem] rounded-full bg-slate-800 [animation-delay:_200ms]"
		></span>
		<span
			class="animate-loading h-[0.75rem] w-[0.75rem] rounded-full bg-slate-800 [animation-delay:_400ms]"
		></span>
		<span
			class="animate-loading h-[0.75rem] w-[0.75rem] rounded-full bg-slate-800 [animation-delay:_600ms]"
		></span>
	</div>

	<span class="text-xl">Mohon tunggu...</span>
</div>
