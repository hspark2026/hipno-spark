export default function Contact() {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold">Contact Us</h2>

      <input className="border p-2 w-full mt-4" placeholder="Name" />
      <input className="border p-2 w-full mt-2" placeholder="Email" />
      <textarea className="border p-2 w-full mt-2" placeholder="Message" />

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}