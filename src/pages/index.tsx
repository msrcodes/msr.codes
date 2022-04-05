import Button from '../components/Button';

const Homepage = () => (
  <div className="min-h-screen min-w-screen flex place-items-center justify-items-center flex-col">
    <Button className="m-auto">Testing</Button>
    <Button className="m-auto !bg-pink">Testing</Button>
    <Button className="m-auto !bg-green focus:!border-red">Testing</Button>
    <Button className="m-auto !bg-red">Testing</Button>
    <Button className="m-auto !bg-slate text-white border-blue">Testing</Button>
  </div>
);

export default Homepage;
