const ListBuild = (props) => {
    const BuildWith = [
        {
            data: [
                { no: 1, title: 'HTML' },
                { no: 2, title: 'Bootstrap' },
                { no: 3, title: 'Laravel' },
                { no: 4, title: 'MySQL' },
            ]
        }, {
            data: [
                { no: 1, title: 'HTML' },
                { no: 2, title: 'Bootstrap' },
            ]
        }, {
            data: [
                { no: 1, title: 'HTML' },
                { no: 2, title: 'Bootstrap' },
                { no: 3, title: 'PHP' },
                { no: 4, title: 'MySQL' },
            ]
        }, {
            data: [
                { no: 1, title: 'MongoDB' },
                { no: 2, title: 'Express JS' },
                { no: 3, title: 'React JS' },
                { no: 4, title: 'Node JS' },
            ]
        }
        
    ]
    return (
        <div>
            {
                BuildWith[props.noBuild].data.map((datas) => (
                    <div key={datas.no} className="flex pt-2 pl-3">
                        <div className="pt-[2px]">
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <div className="pl-2 text-md text-gray-400">{datas.title}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default ListBuild