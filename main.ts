import {Plugin, Modal, WorkspaceLeaf, App } from 'obsidian';

export class ExampleModal extends Modal {
    constructor(app: App) {
      super(app);
    }
  
    onOpen() {
      let { contentEl } = this;
      contentEl.setText(" YOU HAVE AN AMAZING ASS!! 👀");
      contentEl.addClass("my-modal");
    }
  
    onClose() {
      let { contentEl } = this;
      contentEl.empty();
    }
  }


export default class TimeblockingEvent extends Plugin {
    async onload() {
      await this.onLoad();
    }
  
    async onLoad() {
      // Your other code here
      var spanEvents = document.querySelectorAll<HTMLDivElement>('.fc-event-main');
  
      spanEvents.forEach((spanEvent) => {
        spanEvent.addEventListener('click', () => {
          spanEvent.style.backgroundColor = 'blue';
          openRightLeaf();
          console.log('Did the Color change?!');
        });
      });
    }}
    

    async function openRightLeaf(): Promise<void> {
        const app = window.app; // Assuming the `App` object is available globally
      
        const newLeaf = await app.workspace.getRightLeaf(false); // Create a new leaf to the right
        const modal = new ExampleModal(app);
        //modal.open();
        

       if (newLeaf) {
          // Use the new leaf to display content
          newLeaf.setViewState({ type: 'file', state: { file: './Courtney.md' } });
        } 
      }
