export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="title">
        Book Title:
        <input type="text" id="title" name="title" />
      </label>
      <select>
        <option value="0">Select a category:</option>
        {categories.map((value, index) => <option value={index + 1} key={value}>{value}</option>)}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}
