export default function Login() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Login</h2>
      <form>
        <input placeholder="Email" className="border p-2 block mb-2" />
        <input placeholder="Password" type="password" className="border p-2 block mb-2" />
        <button className="bg-green-600 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
}
