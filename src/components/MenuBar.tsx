const tabs = [
    'Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'
]

const filters = [
    'Home   >', 'Hosting    >', 'Hosting for All    >', 'Hosting 5  >', 'Hosting 6'
]

const MenuBar = () => {
  return ( 
    <div>
        <div className='flex flex-row justify-between'>
            {tabs.map((tab)=>{
                return (
                    <p className="">{tab}</p>
                )
            })}
        </div>
        <div className="flex flex-row justify-start mt-3">
            {
                filters.map((filter)=>{
                    return (
                        <p className="mr-2">
                            {filter}                             
                        </p>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MenuBar