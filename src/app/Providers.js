'use client'
import NavbarComponent from '@/components/NavbarComponent'
import { ThemeProvider } from '@mui/material'
import { NextUIProvider } from '@nextui-org/react'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import darkTheme from './darkTheme'
import { supabase } from '@/config/Supabase'

export default function Providers({ children }) {
	const [session, setSession] = useState();
	const [isLoading, setIsLoading] = useState(true);
	React.useEffect(() => {
		setIsLoading(true)
		const subscription = supabase.auth.onAuthStateChange(
			(event, session) => {
				if (event === 'INITIAL_SESSION') {
					console.log("Initial session", session);
					setSession(session)
					// handle initial session
				}
				else if (event === 'SIGNED_IN') {
					console.log("Signed In", session);
					setSession(session)
				}
				else if (event === 'SIGNED_OUT') {
					console.log("Signed out", session);
					setSession(null)
				}
				else if (event === 'PASSWORD_RECOVERY') {
					// handle password recovery event
				}
				else if (event === 'TOKEN_REFRESHED') {
					// handle token refreshed event
				}
				else if (event === 'USER_UPDATED') {
					// handle user updated event
				}
			})

		return () => {
			subscription.data.subscription.unsubscribe()
		}
	}, [])
	return (
		<div>
			<NextUIProvider>
				<NavbarComponent session={session} />
				<div><Toaster /></div>
				<ThemeProvider theme={darkTheme}>
					{children}
				</ThemeProvider>
			</NextUIProvider>
		</div>
	)
}
