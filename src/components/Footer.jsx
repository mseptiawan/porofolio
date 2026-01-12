const Footer = () => {
  return (
    <footer className="w-full py-6 border-t border-slate-200 dark:border-slate-800">
      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Septiawan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
