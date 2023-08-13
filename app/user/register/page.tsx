'use client'
import { useState, useEffect, useRef, FormHTMLAttributes } from 'react';
import {HandleChangeInterface} from "@/lib/types"
import { USER_REGEX, EMAIL_REGEX, PASS_REGEX, NAME_REGEX} from '@/api/user/regex';
import Link from 'next/link'
import CustomInput from "@/components/inputs"
import {registerUser} from '../../../api/user/userService'


const form = document.querySelector('form') as HTMLFormElement


export default function RegisterForm(){
  const userRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const errRef = useRef<HTMLParagraphElement>(null);

  function handleInputChange(evt:HandleChangeInterface) {
    const value = evt.target.value;
    setInputState({
      ...inputState,
      [evt.target.name]: value
    });
  }

  async function handleSubmit(evt:React.FormEvent<HTMLFormElement>){
    evt.preventDefault()
    const newFormData = new FormData(form);
    const formValues = Object.fromEntries(newFormData.entries())
    setSuccess(true)
     

    console.log(formValues)
  }

  //inputs y validaciones
  const [inputState, setInputState] = useState({
    name: "",
    lastname: "",
    username: "",
    password:"",
    matchPassword:"",
    email:"",
    matchEmail:""
    })

  const [validName, setValidName] = useState(false);
  const [validLastname, setValidLastname] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);


  const [validUserName, setValiUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
   
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [validPwdMatch, setValidPwdMatch] = useState(false);
  const [pwdMatchFocus, setPwdMatchFocus] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [validEmailMatch, setValidEmailMatch] = useState(false);
  const [emailMatchFocus, setEmailMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
      errRef.current?.focus();
  }, [])

  useEffect(()=>{
    const result = NAME_REGEX.test(inputState.name);
    const result2 = NAME_REGEX.test(inputState.lastname);
    setValidName(result)
    setValidLastname(result2)
  }, [inputState.name, inputState.lastname])

  useEffect(()=>{
    const result = USER_REGEX.test(inputState.username);
    setValiUserName(result)  
  }, [inputState.username])

  useEffect(()=>{
      const result = PASS_REGEX.test(inputState.password);
      setValidPwd(result)
      const match = inputState.password === inputState.matchPassword;
      setValidPwdMatch(match);
    }, [inputState.password, inputState.matchPassword])

    useEffect(()=>{
      const result = EMAIL_REGEX.test(inputState.email);
      setValidPwd(result)
      const match = inputState.email === inputState.matchEmail;
      setValidEmailMatch(match);
    }, [inputState.email, inputState.matchEmail])

    useEffect(()=>{
      setErrMsg('')
    },[inputState.username, inputState.password, inputState.matchPassword,inputState.email,inputState.matchEmail])

    let valid = nameFocus
    console.log(valid)

    return (
    <section className='min-h-screen w-full md:flex md:items-center md:justify-center'>
      <p ref={errRef} className={errMsg? "errmsg" : "offscreen"}></p>
    <div className='lg:w-2/5' >
      <form onSubmit={handleSubmit} action="" method="post" id="form" className=" bg-slate-100 flex flex-col justify-between p-10 lg:px-20 md:rounded">
          <div className=" flex flex-col items-center gap-1">
              <div className="bg-indigo-700 h-16 w-16 rounded-full"></div>
              <h1 className='text-2xl text-center p-4'>Registrate</h1>
          </div>

        <div className="grid items-center gap-4 container w-full">

          <CustomInput type="text" label="Nombre" id="name" handle={handleInputChange} refe={nameRef} focus={setNameFocus}/>

          <CustomInput type="text" label="Apellido" id="lastname" handle={handleInputChange} refe={nameRef} focus={setLastnameFocus}/>

          <CustomInput type="text" label="Usuario" id="username" handle={handleInputChange} refe={userRef} focus={setUserFocus}/>

          <CustomInput type="email" label="email" id="email" handle={handleInputChange} refe={emailRef} focus={setEmailFocus}/>

          <CustomInput type="email" label="Confirme email" id="matchEmail" handle={handleInputChange} focus={setEmailMatchFocus}/>

          <CustomInput type="password" label="Contraseña" id="password" handle={handleInputChange} refe={passRef} focus={setPwdFocus}/>

          <CustomInput type="password" label="Confirme contraseña" id="matchPassword" handle={handleInputChange} focus={setPwdMatchFocus}/>

          <button disabled={!validEmail || !validEmailMatch || !validLastname || !validName || !validPwd || !validPwdMatch || !validUserName? true : false} id="formSubmit" className='px-10 py-3 bg-indigo-700 text-gray-100 text disabled:opacity-50'>Registrarse</button>

          <span className="warning" id="warning"></span>
          <Link href="#" className="text-center hover:text-indigo-600 hover:underline focus:text-indigo-900 focus:underline">¿Ya tenés una cuenta? Inicia sesión</Link>
        </div>
      </form>
    </div>
    </section>)
}