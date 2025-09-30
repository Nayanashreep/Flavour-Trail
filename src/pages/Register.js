export default function Register() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Register</h2>
      <form>
        <input placeholder="Email" className="border p-2 block mb-2" />
        <input placeholder="Password" type="password" className="border p-2 block mb-2" />
        <input placeholder="Confirm Password" type="password" className="border p-2 block mb-2" />
        <button className="bg-green-600 text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
}
