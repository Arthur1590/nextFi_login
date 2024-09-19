import { Onest } from 'next/font/google'

export const metadata = {
	title: 'Sign Up',
	description: 'Register page for NextFi',
}

const onest = Onest({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={onest.className}>
				{children}
			</body>
		</html>
	)
}
