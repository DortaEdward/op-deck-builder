import Card from "./Card"
type Props = {
  active: any,
}

export default function ActiveCard({active}:Props) {
  return (
    <div className="w-[20%] h-[600px] outline rounded-lg p-2 flex flex-col items-center gap-2 shadow-lg">
      <div className="flex flex-wrap items-center gap-1">
        {
          active
            ?
            <div className="flex flex-col justify-center w-full">
              <Card
                card={active}
                className={'rounded w-4/5 mx-auto my-2'}
              />
              <p className='text-lg font-medium text-center'>{active.name}</p>
              <div className="flex gap-2 mx-auto">
                {
                  active.color.split('/').map(color => {
                    return (
                      <p key={color} className='capitalize'>
                        {color}
                      </p>
                    )
                  })
                }
              </div>
              <div className="overflow-auto">
                <p className="bg-slate-700 p-2 rounded-lg">{active.effect}</p>
              </div>
            </div>
            : <></>
        }
      </div>
    </div>
  )
}
