// const Notes = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note) => (
//           <Notes key={note.id} note={note} />
//         ))}
//       </ul>
//     </div>
//   );
// }

const Notes = ({notes}) => {
    const data = notes
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {data.map((note) => (
                    <li key={note.id}>
                        {note.content}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Notes