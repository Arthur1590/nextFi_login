import Link from 'next/link'

export default function Home() {
	return (
		<>
			<h1 style={{color: '#fff'}}>NEXTFI CONTENT STATIC</h1>
			<Link href='/auth/signin'>Sign in</Link>
			<br />
			<Link href='/auth/signup'>Sign Up</Link>
		</>
	)
}
