import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState, useEffect } from 'react';

// Fetch from .env
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

const customLocalization = {
    variables: {
      sign_up: {
        email_label: 'Email address',
        password_label: 'Create a password',
        email_input_placeholder: 'Your email address',
        password_input_placeholder: 'Your password',
        button_label: 'Create Account',
        loading_button_label: 'Creating your account...',
        social_provider_text: 'Sign up with {{provider}}',
        link_text: 'Don\'t have an account? Create one',
        confirmation_text: 'Check your email for the confirmation link',
      },
      sign_in: {
        email_label: 'Email address',
        password_label: 'Your password',
        email_input_placeholder: 'Your email address',
        password_input_placeholder: 'Your password',
        button_label: 'Sign in',
        loading_button_label: 'Signing in...',
        social_provider_text: 'Sign in with {{provider}}',
        link_text: 'Already have an account? Sign in',
      },
    },
};

const customViewLabels = {
    sign_up: {
        view_label: 'Join Pinecone Portal',
        description: 'Create your account to start sharing your music with the world.',
      },
    sign_in: {
        view_label: 'Welcome back',
        description: 'Sign in to continue your musical journey.',
      },
};


// AuthModal component for login/signup
const AuthModal = ({ isOpen, onClose }) => {
if (!isOpen) return null;

return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md relative">
        <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
        ✕
        </button>
        
        <div className="mb-6">
        <Auth
            supabaseClient={supabase}
            appearance={{
            theme: ThemeSupa,
            variables: {
                default: {
                colors: {
                    brand: '#84cc16',
                    brandAccent: '#65a30d',
                },
                },
            },
            className: {
                container: 'auth-container',
                button: 'auth-button',
                input: 'auth-input',
                label: 'text-sm font-medium text-gray-300 mb-1',
                message: 'text-sm text-gray-400',
            },
            }}
            localization={customLocalization}
            providers={['google', 'apple']}
            viewLabels={customViewLabels}
        />
        </div>
    </div>
    </div>
);
};
  
// AuthButton component
const AuthButton = () => {
const [session, setSession] = useState(null);
const [showModal, setShowModal] = useState(false);

useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
    });

    // Listen for auth changes
    const {
    data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
    });

    return () => subscription.unsubscribe();
}, []);

return (
    <>
    {session ? (
        <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">{session.user.email}</span>
        <button
            onClick={() => supabase.auth.signOut()}
            className="bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors"
        >
            Sign Out
        </button>
        </div>
    ) : (
        <button
        onClick={() => setShowModal(true)}
        className="bg-lime-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-500 transition-colors"
        >
        Sign In
        </button>
    )}

    <AuthModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
    />
    </>
);
};
  
export { AuthButton, supabase };