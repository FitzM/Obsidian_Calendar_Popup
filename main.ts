import {Plugin, Modal, WorkspaceLeaf, App, WorkspaceSidedock, WorkspaceSplit, TFile, ItemView, WorkspaceRibbon} from 'obsidian';
import * as React from 'react';
import { createRoot } from "react-dom/client";
import * as ReactDom from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import CardsBox from './components/CardsBox';

      // Test String Array
let TestTodoList = ["Change the Laundry","Go to the store","Get Gas","Feed the Dogs","Give Courtney Massage"];

//Load plugin and apply eventListener for opening view
export default class TimeblockingEvent extends Plugin {
    async onload() {
     
      this.registerView("my-custom-view", leaf => new MyCustomView(leaf))
    
      var calEvents = document.querySelectorAll<HTMLDivElement>('.fc-event-main');

      calEvents.forEach((calEvent) => {
       calEvent.addEventListener('click', () => {
         calEvent.style.backgroundColor = 'blue';
        const leaf = this.app.workspace.getRightLeaf(false);
        this.app.workspace.revealLeaf(leaf);
        leaf.setViewState({ type: "my-custom-view", active: true });  
         console.log('Did the Color change?!');
       });
     }); 
    }}

export class ExampleModal extends Modal {
  constructor(app: App) {
    super(app);
  }

  onOpen() {
    let { contentEl } = this;
    contentEl.setText("Look at me, I'm a modal! 👀");
  }

  onClose() {
    let { contentEl } = this;
    contentEl.empty();
  }
}


    export const VIEW_TYPE_EXAMPLE = "My-custom-view";
    export class MyCustomView extends ItemView {
      constructor(leaf: WorkspaceLeaf) {
        
        super(leaf);
      }
    
      getViewType() {
        return VIEW_TYPE_EXAMPLE;
      }
    
      getDisplayText() {
        return "Example view";
      }
    
      async onOpen() {
        const root = createRoot(this.containerEl.children[1]);
        root.render(CardsBox(TestTodoList));
      }

      async activateView() {
        this.app.workspace.detachLeavesOfType(VIEW_TYPE_EXAMPLE);
          
        this.app.workspace.revealLeaf(
          this.app.workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE)[0]
        );}

      async onclose() {
        // Nothing to clean up.
      }
    }


    