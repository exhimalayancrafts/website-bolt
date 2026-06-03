import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-[50vh] flex items-center justify-center px-6" role="alert" aria-live="assertive">
          <div className="text-center max-w-sm">
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">Error</p>
            <h2 className="font-serif text-2xl font-light text-stone-900 mb-4">Something went wrong</h2>
            <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8">
              This section couldn't be loaded. The rest of the page is still available.
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="font-sans text-sm text-stone-600 hover:text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-1 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
