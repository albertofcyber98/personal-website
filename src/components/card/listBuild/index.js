const ListBuild = (props) => {
    const BuildWith = [
        {
            data: [
                { no: 1, title: 'HTML' },
                { no: 2, title: 'Laravel' },
                { no: 3, title: 'Bootstrap' },
            ]
        }, {
            data: [
                { no: 1, title: 'HTML' },
                { no: 2, title: 'Bootstrap' },
            ]
        }, {
            data: [
                { no: 1, title: 'React JS' },
                { no: 2, title: 'Node JS' },
                { no: 3, title: 'Tailwind' },
            ]
        }, {
            data: [
                { no: 1, title: 'React JS' },
                { no: 2, title: 'Tailwind' },
            ]
        }
        
    ]
    return (
        <div>
            {
                BuildWith[props.noBuild].data.map((datas) => (
                    <div key={datas.no} className="flex pt-2 pl-3 text-gray-400">
                        <div className="pt-[2px]">
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <div className="pl-2 text-md">{datas.title}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default ListBuild