import type { inputParams } from "@/lib/types"

export default function CustomInput({id, label, type, refe, pattern, handle, focus}:inputParams) {
    return(
        <div className="relative group">
        <label htmlFor={id} className="transform transition-all  ease absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/6 peer-valid:h-1/6 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-2 peer-valid:pl-2" >{label}</label>
          <input type={type} name={id} id={id} pattern={pattern} required ref={refe} onFocus={()=>focus(true)} onBlur={()=>focus(false)} onChange={handle} className='w-full py-3 px-4 text-sm peer bg-white outline-none' placeholder=""/>

      </div>
    )
}