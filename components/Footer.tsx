import Link from "next/link"

function Footer() {
  return (
   <div className="bg-cyan-900 text-white flex justify-center fixed bottom-0 text-xl w-[100%] ">
    <ul>
        
        
        <Link href="/terms">
        <li>Terms & Condition</li>
      </Link>
      <Link href="/terms">
        <li>Privacy and Policy</li>
      </Link>
    </ul>
   </div>   
  )
}

export default Footer