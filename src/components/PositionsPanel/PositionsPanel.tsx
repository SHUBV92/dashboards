import './PositionsPanel';

const students = [
  { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
  { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
  { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
  { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
];

const PositionsPanel = () => {
  return (
    <div>
      <table className='students'>
        {students.map((student) => (
          <tbody>
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default PositionsPanel;
