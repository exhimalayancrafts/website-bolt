import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found — Exclusive Crafts" description="The page you're looking for doesn't exist." />
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">404</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
            Page not found
          </h1>
          <p className="font-sans text-base text-stone-500 leading-relaxed mb-10">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link
            to="/"
            className="inline-block font-sans text-sm text-stone-100 bg-stone-900 hover:bg-stone-700 transition-colors px-8 py-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
