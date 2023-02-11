
const Footer = () => {
  return (
    <footer className="container mx-auto py-10  bg-green-900 text-center text-sm  text-gray-300  border-t-2 border-green-800">
      <p> &copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  )
}

export default Footer