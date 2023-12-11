export function Loading() {
  return (
    <div className="w-full h-full absolute inset-0 bg-color-2/[.6] flex items-center justify-center">
      <div className="w-40">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <circle
            fill="#463220"
            stroke="#463220"
            strokeWidth="15"
            r=".01"
            cx="8"
            cy="25"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            />
          </circle>
          <circle
            fill="#463220"
            stroke="#463220"
            strokeWidth="15"
            r=".01"
            cx="25"
            cy="25"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            />
          </circle>
          <circle
            fill="#463220"
            stroke="#463220"
            strokeWidth="15"
            r=".01"
            cx="42"
            cy="25"
          >
            <animate
              attributeName="opacity"
              calcMode="spline"
              dur="2"
              values="1;0;1;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
