import {Plugin, Modal, WorkspaceLeaf, App, WorkspaceSidedock, WorkspaceSplit } from 'obsidian';
export class ExampleModal extends Modal {
    constructor(app: App) {
      super(app);
    }
  
  
    onOpen() {
      let { contentEl } = this;
      const contentText = ""
      contentEl.setText(contentText);
      contentEl.addClass("my-modal");
    }
  
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
    }
  }


export default class TimeblockingEvent extends Plugin {
  private WorkspaceSplit: WorkspaceSidedock | null = null;


    async onload() {
      await this.onLoad();
    }
  
    async onLoad() {
      // Your other code here
      var spanEvents = document.querySelectorAll<HTMLDivElement>('.fc-event-main');
  
      spanEvents.forEach((spanEvent) => {
        spanEvent.addEventListener('click', () => {
          spanEvent.style.backgroundColor = 'blue';
         // openRightPanel();
          openRightLeaf('TickTick-Inbox.md');
          console.log('Did the Color change?!');
        });
      });
    }}
    




    // Function to open Right Leaf in Main document

    async function openRightLeaf(filePath: string): Promise<void> {
        const app = this.app; 
      
        const newLeaf = app.workspace.getRightLeaf(false); // Create a new leaf to the right
        this.app.workspace.revealLeaf(newLeaf);
        newLeaf.view.focus();
       if (newLeaf) {
        newLeaf.setViewState({ type: "file", state: { file: filePath } });              
        } 
      }

      openRightLeaf('/TickTick-Inbox');



