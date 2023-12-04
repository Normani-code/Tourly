export default function Perks({selected,onChange}) {
  function handleCbClick(ev) {
    const {checked,name} = ev.target;
    if (checked) {
      onChange([...selected,name]);
    } else {
      onChange([...selected.filter(selectedName => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('parking')} name="parking" onChange={handleCbClick}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <span>Transporte</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('Coctel de bienvenida')} name="Coctel de bienvenida" onChange={handleCbClick}/>
        <svg fill="#000000" height="200px" width="200px" className="w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M488.977,5.382c-1.866-4.463-6.998-6.569-11.461-4.702l-91.454,38.235c-1.487,0.621-2.773,1.641-3.719,2.946 l-49.13,67.885H182.395c-4.38-40.153-38.482-71.509-79.782-71.509c-27.922,0-52.548,14.339-66.934,36.031 c-0.063,0.081-0.133,0.155-0.194,0.239c-0.271,0.371-0.498,0.759-0.701,1.155c-7.865,12.407-12.441,27.096-12.441,42.842 c0,44.261,36.009,80.269,80.27,80.269c15.179,0,28.976-3.782,41.14-11.227l12.551,14.564c3.159,3.666,8.692,4.075,12.353,0.918 c3.666-3.158,4.076-8.688,0.918-12.355L146.417,163.8c14.451-7.252,28.583-10.111,42.101-8.468 c15.145,1.84,25.076,8.706,36.574,16.656c8.44,5.836,17.165,11.87,28.707,16.562c11.848,4.814,24.499,7.22,37.882,7.22 c6.899,0,13.994-0.645,21.271-1.924l-70.322,81.607l-49.408-57.336c-3.159-3.665-8.691-4.074-12.353-0.918 c-3.666,3.158-4.076,8.69-0.918,12.355l52.682,61.135c0.374,0.433,0.79,0.819,1.232,1.166v161.128l-85.218,42.415 c-3.639,1.812-5.555,5.889-4.624,9.847s4.462,6.755,8.527,6.755h180.161c4.066,0,7.596-2.797,8.527-6.755 s-0.985-8.035-4.624-9.847l-85.218-42.411V291.855c0.443-0.347,0.858-0.732,1.232-1.166l143.446-166.466 c2.235-2.595,2.754-6.254,1.328-9.368c-1.428-3.114-4.539-5.11-7.963-5.11H354.84l40.251-55.618l89.18-37.286 C488.738,14.976,490.842,9.845,488.977,5.382z M295.451,494.48H189.81l52.817-26.288L295.451,494.48z M164.739,109.746h-53.125 l26.703-42.801C152.369,76.707,162.255,92.051,164.739,109.746z M102.615,55.756c6.987,0,13.704,1.166,19.986,3.282L93.377,105.88 L54.898,77.822C66.416,64.334,83.528,55.756,102.615,55.756z M39.864,118.505c0-9.223,2.017-17.979,5.606-25.876l38.583,28.134 l-26.209,41.651C46.734,151.09,39.864,135.588,39.864,118.505z M102.615,181.255c-11.195,0-21.706-2.961-30.815-8.12 l25.127-39.932l35.191,40.839C123.319,178.828,113.436,181.255,102.615,181.255z M370.327,127.265l-37.019,42.962 c-27.409,9.897-51.935,10.617-72.909,2.093c-9.757-3.966-17.68-9.443-25.34-14.741c-12.286-8.495-24.988-17.277-44.426-19.638 c-18.277-2.22-37.077,1.91-55.952,12.238l-19.745-22.914h222.737c0.002,0,0.005,0,0.007,0c0.003,0,0.007,0,0.009,0H370.327z"></path> </g> </g> </g></svg>
        <span>Coctel de bienvenida</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('radio')} name="radio" onChange={handleCbClick}/>
        <svg className="w-6 h-6" viewBox="0 0 24 24" id="meteor-icon-kit__regular-guide" fill="#000000" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 0C16.4477 0 16 0.44772 16 1V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V8.7808L23.2425 7.47014C23.6877 7.35885 24 6.95887 24 6.5V1C24 0.44772 23.5523 0 23 0H17zM22 5.71922L18 6.71922V2H22V5.71922z" fill="#000000"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C9.20914 11 11 9.2091 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.2091 4.79086 11 7 11zM7 9C8.10457 9 9 8.1046 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.1046 5.89543 9 7 9z" fill="#000000"></path><path d="M5 14C3.34315 14 2 15.3431 2 17V19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 14.2386 2.23858 12 5 12H9C11.7614 12 14 14.2386 14 17V19C14 19.5523 13.5523 20 13 20C12.4477 20 12 19.5523 12 19V17C12 15.3431 10.6569 14 9 14H5z" fill="#000000"></path></g>
        </svg>
        <span>Guia</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('pets')} name="pets" onChange={handleCbClick}/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"/>
        </svg>
        <span>Mascotas</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick}/>
        <svg className="w-6 h-6" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="var(--ci-primary-color, #000000)" d="M93.976,276.6,38.211,332.367a32,32,0,0,0,0,45.255l96.167,96.168a32.038,32.038,0,0,0,45.254,0L235.4,418.024l-22.616-22.616L157.02,451.175a.094.094,0,0,1-.015-.013L60.839,355,116.6,299.23Z" class="ci-primary"></path> <path fill="var(--ci-primary-color, #000000)" d="M473.789,134.378,377.622,38.21a32.037,32.037,0,0,0-45.254,0L276.6,93.976,299.23,116.6,355,60.838l96.166,96.167L395.4,212.772,418.024,235.4l55.765-55.764a32,32,0,0,0,0-45.255Z" class="ci-primary"></path> <rect width="21.941" height="21.941" x="245.515" y="196.544" fill="var(--ci-primary-color, #000000)" class="ci-primary" transform="rotate(-45 256.485 207.514)"></rect> <rect width="21.941" height="21.941" x="245.515" y="293.515" fill="var(--ci-primary-color, #000000)" class="ci-primary" transform="rotate(-45 256.487 304.486)"></rect> <rect width="21.941" height="21.941" x="294" y="245.029" fill="var(--ci-primary-color, #000000)" class="ci-primary" transform="rotate(-45 304.969 256)"></rect> <rect width="21.941" height="21.941" x="197.029" y="245.029" fill="var(--ci-primary-color, #000000)" class="ci-primary" transform="rotate(-45 208 256)"></rect> <path fill="var(--ci-primary-color, #000000)" d="M321.3,462.705a47.988,47.988,0,0,0,67.641-.23l73.539-73.539a48,48,0,0,0,0-67.882l-7.764-7.765-240-240L190.946,49.525a48,48,0,0,0-67.882,0l-73.54,73.539h0a48,48,0,0,0,0,67.882l31.764,31.765L321.054,462.475C321.133,462.553,321.216,462.626,321.3,462.705ZM72.152,168.319a16,16,0,0,1,0-22.628l73.539-73.539a16,16,0,0,1,22.628,0l65.054,65.054-96.167,96.167ZM159.833,256,256,159.833,352.171,256l-96.162,96.172Zm214.961,22.627,65.054,65.054a16,16,0,0,1,0,22.628l-73.539,73.539a16,16,0,0,1-22.628,0l-65.054-65.054Z" class="ci-primary"></path> </g></svg>
        <span>Primeros auxilios</span>
      </label>
    </>
  );
}
