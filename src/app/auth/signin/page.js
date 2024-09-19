'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LogIn() {
	const [showPassword, setShowPassword] = useState(false)
	const [inputOne, setInputOne] = useState('')
	const [inputTwo, setInputTwo] = useState('')
	const [mode, setMode] = useState('email')
	const inputOneClass = inputOne.length <= 3 ? 'invalid' : ''
	const inputTwoClass = inputTwo.length <= 3 ? 'invalid' : ''
	const btnAuth = inputOne.length > 3 && inputTwo.length > 3 ? 'valid' : ''

	const modeToogle = selected => {
		setMode(selected)
	}
	const togglePasswordVisibility = () => {
		setShowPassword(prevState => !prevState)
	}

	const handleInputOneChange = e => {
		setInputOne(e.target.value)
	}

	const handleInputTwoChange = e => {
		setInputTwo(e.target.value)
	}

	return (
		<div className='form__wrapper'>
			<Image
				src={'/form/logo_form.svg'}
				className='mobile__logo'
				width={172}
				height={72}
				quality={100}
				priority
				alt='Logo'
			/>
			<h1>
				<b>Welcome</b> to NextFi
			</h1>

			<div className='switch-mode'>
				<a href='#' className={mode === 'email' ? 'active' : ''} onClick={() => modeToogle('email')}>
					E-mail
				</a>
				<a href='#' className={mode === 'phone' ? 'active' : ''} onClick={() => modeToogle('phone')}>
					Phome number
				</a>
			</div>

			<form className='form' onSubmit={e => e.preventDefault()}>
				<input
					type='text'
					placeholder='E-mail'
					onChange={handleInputOneChange}
					className={inputOneClass}
				/>

				<div className='password__wrapper'>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						onChange={handleInputTwoChange}
						className={inputTwoClass}
					/>

					<span onClick={togglePasswordVisibility}>
						<Image
							src={
								showPassword
									? '/form/Mobile_ visibility_off.svg'
									: '/form/Mobile_ visibility.svg'
							}
							width={44}
							height={44}
							alt={'eye'}
						/>
					</span>
				</div>

				<button className={btnAuth}>Log In</button>
			</form>

			<div className='help'>
				<a href='' className='help-forgot'>
					Forgot your password
				</a>
				<p>
					<span></span>
					Or
					<span></span>
				</p>

				<button className='mobile__google'>
					<Image
						src='/form/Mobile_ Google.svg'
						width={24}
						height={24}
						alt='Google icon'
					/>
					Continue with Google
				</button>

				<Link href='/auth/signup' className='help-signup'>
					Dont' have an account? <span>Sign In</span>
				</Link>

				<div className='socials'>
					<span>join us on social networks</span>

					<div className='socials__icons'>
						<Image
							src={'/form/icons_white/Instagram.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_white/Telegram_white.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_white/Snapchat_white.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
						<Image
							src={'/form/icons_white/Twitter_white.svg'}
							width={48}
							height={48}
							quality={100}
							alt='Logo'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
