import Button from '../components/Button';

interface Link {
  href: string;
  text: string;
}

const links: Link[] = [
  {href: 'https://github.com/msrcodes', text: 'GitHub'},
  {href: 'https://twitter.com/msrcodes', text: 'Twitter'},
  {href: 'https://linkedin.com/in/mikaelsrozee', text: 'LinkedIn'},
];

const Homepage = () => (
  <main className="bg-blue min-h-screen px-8 gap-4 flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center m-auto">
      <section className="m-auto flex flex-col gap-6 max-w-lg">
        <h1>msr.codes</h1>
        <p>I also do other things.</p>
        <p>
          This site is currently under construction. For now, find me on other
          platforms.
        </p>
      </section>
      <nav className="m-auto flex flex-col gap-6 w-full max-w-lg">
        {links.map(({href, text}) => (
          <Button href={href} className="!bg-pink text-left" key={text}>
            {text}
          </Button>
        ))}
      </nav>
    </div>
  </main>
);

export default Homepage;
