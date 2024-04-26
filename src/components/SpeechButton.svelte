<script>
import { onMount } from 'svelte';

export let text;
export let lang;
export let voice;
let canSpeech;

function handleClick() {
   const msg = new SpeechSynthesisUtterance()
   const v = speechSynthesis.getVoices().find(v => v.voiceURI === voice)
   msg.text = text
   msg.lang = lang
   if (v) msg.voice = v
   window.speechSynthesis.speak(msg)
}

onMount(() => {
   if (window.speechSynthesis) {
      setTimeout(() => {
         canSpeech = true
      }, 500)
   }
})
</script>

<button class:opacity-100={canSpeech} class="border opacity-0 -rotate-6 transition-opacity rounded-md border-stone-500 text-stone-500 hover:bg-stone-100 transition-colors" on:click={handleClick}>
   <span class="sr-only">Read out loud</span>
   <span class="w-[32px] h-[32px] p-1 block">
      <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g class="fill-current">
      <path d="M5.063,19.369l0.521,4.602c0.007,0.067,0.021,0.133,0.042,0.197c0.412,1.266,1.591,2.072,2.855,2.072   c0.308,0,0.619-0.048,0.927-0.148c1.572-0.512,2.436-2.208,1.924-3.781l-0.83-2.551h0.261l7.789,3.895   c0.142,0.07,0.294,0.105,0.447,0.105c0.183,0,0.365-0.05,0.525-0.149C19.82,23.429,20,23.107,20,22.76v-4.142   c1.721-0.447,3-2,3-3.858s-1.279-3.411-3-3.858V6.76c0-0.347-0.18-0.668-0.475-0.851c-0.295-0.183-0.663-0.199-0.973-0.044   L10.764,9.76H7c-2.757,0-5,2.243-5,5C2,16.831,3.265,18.611,5.063,19.369z M9.43,22.93c0.171,0.524-0.116,1.089-0.641,1.26   c-0.499,0.163-1.032-0.089-1.231-0.562L7.119,19.76h1.279L9.43,22.93z M21,14.76c0,0.737-0.405,1.375-1,1.722v-3.443   C20.595,13.385,21,14.023,21,14.76z M18,21.142l-6-3v-6.764l6-3V21.142z M7,11.76h3v6H7c-1.654,0-3-1.346-3-3S5.346,11.76,7,11.76z"/>
      <path d="M27,15.76h2c0.553,0,1-0.448,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.448-1,1S26.447,15.76,27,15.76z"/><path d="M27,10.467c0.256,0,0.512-0.098,0.707-0.293l1.414-1.414c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0   L26.293,8.76c-0.391,0.391-0.391,1.023,0,1.414C26.488,10.37,26.744,10.467,27,10.467z"/><path d="M27.707,22.174c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414   l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L27.707,22.174z"/>
      </g>
      </svg>
   </span>
</button>
