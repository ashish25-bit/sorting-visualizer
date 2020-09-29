const TraverseSLL = (list) => {
    var {root: temp} = list;
    while (temp !== null) {
        console.log(temp.data)
        temp = temp.next;
    }
}

export default TraverseSLL