interface InfoTextProps {
    texto:string;
}

const InfoText = ({texto}: InfoTextProps) => {
  return (
    <p className="text-[#505050] py-2 px-4 font-normal text-md lg:text-2xl ">
        {texto}
    </p>
  )
}

export default InfoText