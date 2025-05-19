
const appointmentlink = process.env.NEXT_PUBLIC_APPOINTMENT_URL;
console.log(appointmentlink)
const page = () => {
  return (
    <div className="bg-gray-50">
<iframe
  src={appointmentlink}
  style={{ border: "0" }}
  width="100%"
  height="600"
  frameBorder="0"
></iframe>
</div>
  )
}

export default page