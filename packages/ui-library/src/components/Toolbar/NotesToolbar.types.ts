export interface NotesToolbarProps {
  /**
   * The menu to be displayed in the toolbar.
   *
   * Example: <MenuComponent />
   */
  menu: React.ReactNode;
  onSave: () => void;
  /**
   * The time or date when the note was last updated.
   *
   * Example: "April 5, 2025" or "13h ago"
   */
  updatedAt: string;
}
