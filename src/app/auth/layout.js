import Image from 'next/image'
import '../global.scss'

export const metadata = {
	title: 'Auth | ',
	description: 'Register page for NextFi',
}

export default function FormLayout({ children }) {
	return (
		<div className='main'>
			<div className='main__left'>
				<div className='back_btn'>
					<a href=''>
						<Image
							src={'/form/arrow_left.svg'}
							width={50}
							height={50}
							alt='arrow left'
						/>
					</a>
				</div>

				<div className='main__img'>
					<Image
						src={'/form/illustr.svg'}
						width={544}
						height={408}
						quality={100}
						priority
						alt='Img main'
					/>
				</div>

				<div className='socials'>
					<Image
						src={'/form/logo_form.svg'}
						width={224}
						height={90}
						quality={100}
						priority
						alt='Logo'
					/>

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
			<div className='main__right'>{children}</div>
		</div>
	)
}
