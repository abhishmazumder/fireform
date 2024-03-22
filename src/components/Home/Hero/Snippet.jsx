import { memo } from "react";

const Snippet = memo(() => {
  return (
    <div className="relative group w-full md:w-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-tertiary to-primary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500 group-hover:duration-500"></div>
      <div className="relative w-auto h-auto rounded-2xl overflow-x-scroll no-scrollbar text-md md:text-lf bg-secondary">
      <div className=" w-full h-8 px-3 flex gap-x-2 items-center border-neutral-100">
        <span className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-error"></span>
        <span className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-warning"></span>
        <span className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-success"></span>
      </div>
      <ul className="px-5 py-1 md:py-2 font-code text-white">
        <li className="flex gap-2">
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code-red">form</span>
          </span>
          <span>
            <span className="text-code-green">action</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow py-1 bg-secondary-light">
              https://fireform.dev/&lt;YOUR_KEY&gt;
            </span>
            <span className="text-code">&quot;</span>
          </span>
          <span>
            <span className="text-code-green">method</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">POST</span>
            <span className="text-code">&quot;</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
        <li className="pl-6 flex gap-2">
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code-red">input</span>
          </span>
          <span>
            <span className="text-code-green">type</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">email</span>
            <span className="text-code">&quot;</span>
          </span>
          <span>
            <span className="text-code-green">name</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">email</span>
            <span className="text-code">&quot;</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
        <li className="pl-6 flex gap-2">
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code-red">input</span>
          </span>
          <span>
            <span className="text-code-green">type</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">text</span>
            <span className="text-code">&quot;</span>
          </span>
          <span>
            <span className="text-code-green">name</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">name</span>
            <span className="text-code">&quot;</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
        <li className="pl-6 flex gap-2">
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code-red">input</span>
          </span>
          <span>
            <span className="text-code-green">type</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">file</span>
            <span className="text-code">&quot;</span>
          </span>
          <span>
            <span className="text-code-green">name</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">file</span>
            <span className="text-code">&quot;</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
        <li className="pl-6 flex gap-2">
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code-red">button</span>
          </span>
          <span>
            <span className="text-code-green">type</span>
            <span className="text-code">=</span>
            <span className="text-code">&quot;</span>
            <span className="text-code-yellow">submit</span>
            <span className="text-code">&quot;</span>
            <span className="text-code">&gt;</span>
          </span>
          <span className="text-code">Send</span>
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code">/</span>
            <span className="text-code-red">button</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
        <li>
          <span>
            <span className="text-code">&lt;</span>
            <span className="text-code">/</span>
            <span className="text-code-red">form</span>
            <span className="text-code">&gt;</span>
          </span>
        </li>
      </ul>
    </div>
    </div>
    
  );
});

Snippet.displayName = "Snippet";

export default Snippet;
