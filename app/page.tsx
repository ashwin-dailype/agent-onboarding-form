import MyForm from "./form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex">
        <MyForm />
      </div>
      <div></div>
    </main>
  );
}
