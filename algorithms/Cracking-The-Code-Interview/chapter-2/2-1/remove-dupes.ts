import { LinkedList, Node } from '../linked-list';

//Method 1. hash table and generate new LL at end
// const removeDupes = (list: LinkedList) => {
//     //if list is empty return list
//     if (!list.head) return list;

//     const buffer: Record<string | number, string | number> = {};
//     //place all items in LL in buffer (one copy only)

//     let current: Node | null = list.head;

//     while (current !== null) {
//         // //add first instance to buffer
//         if (!buffer[current.element]) {
//             buffer[current.element] = current.element;
//         }
//         current = current.next;
//     }

//     //now generate new LL with unique set of values
//     const uniqueLL = new LinkedList();
//     Object.values(buffer).forEach((element) => {
//         uniqueLL.add(element);
//     });

//     return uniqueLL;
// };

//Method 2. hash table and edit while traversing o(n), o(n)
// const removeDupes = (list: LinkedList) => {
//     //if list is empty or has single element return it
//     if (!list.head) return list;

//     const buffer: Record<string | number, string | number> = {};
//     //place all items in LL in buffer (one copy only)

//     //pointer to previous element in list
//     let prev = list.head;
//     let current: Node | null = list.head;

//     while (current !== null) {
//         if (buffer[current?.element]) {
//             prev.next = current.next;
//         }
//         //double element found. Remove from LL
//         else {
//             prev = current;
//             buffer[current.element] = current.element;
//         }
//         current = current.next;
//     }
//     return list;
// };

//Method 3. in place no hash O(n^2) run, O(1) space
const removeDupes = (list: LinkedList) => {
    //if list is empty or has single element return it
    if (!list.head) return list;

    let current: Node | null = list.head;

    while (current !== null) {
        let runner = current.next;
        while (runner && runner.next !== null) {
            //hey we found a match in runner versus our current element. skip it
            if (runner.next.element === current.element) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
    return list;
};

export default removeDupes;
