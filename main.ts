import {Plugin, Modal, WorkspaceLeaf, App, WorkspaceSidedock, WorkspaceSplit, TFile, ItemView, WorkspaceRibbon, parseFrontMatterEntry, parseFrontMatterStringArray, parseFrontMatterTags} from 'obsidian';
import * as React from 'react';
import { createRoot } from "react-dom/client";
import * as ReactDom from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { match } from 'assert';
import { parse } from 'path';
import { stringify } from 'querystring';
import {CardsBox} from './components/CardsBox'

      // Test String Array
let todoTasksToDisplay:string [] = [];



//Load plugin and apply eventListener for opening view
export default class TimeblockingEvent  extends Plugin {
    async onload() {
     
      this.registerView("my-custom-view", leaf => new MyCustomView(leaf))
      
      let filePath!: string;
      var calEvents = document.querySelectorAll<HTMLDivElement>('.fc-event-main');
     let googleEvents = document.querySelectorAll < HTMLDivElement > ('.googleCalendarEvent');
     googleEvents.forEach((calEvent) => {
         calEvent.addEventListener('click', event => {
             calEvent.style.backgroundColor = 'blue';
             const clickEventId = (event.currentTarget as HTMLDivElement).id;
             const allFiles = app.vault.getFiles();
             console.log(clickEventId)
             const matchingFiles = allFiles.filter((file) => {
              const frontmatter = app.metadataCache.getFileCache(file)?.frontmatter;
              const eventId = parseFrontMatterEntry(frontmatter, "event-id");
              const todoListValue = parseFrontMatterEntry(frontmatter, "todo-list");
              if (eventId == clickEventId) {
                console.log("SUCCESS!!");
                console.log(todoListValue);
              filePath = "TodoSublists/"+todoListValue+".md";
              console.log(filePath)
                return true; // Include the file in the filtered results
              }
              //console.log("negative")
              return false; // Exclude the file from the filtered results
            });
            console.log(filePath)
             readFileAndSplit(filePath).then((todoTasksToDisplay) => {
              
              console.log(todoTasksToDisplay)
             });

          
   
    
            const leaf = this.app.workspace.getRightLeaf(false);
           this.app.workspace.revealLeaf(leaf);
            leaf.setViewState({ type: "my-custom-view", active: true });  
            console.log(todoTasksToDisplay);
            console.log('Did the Color change?!');
          
          })
        })
       
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
     public constructor(
        leaf: WorkspaceLeaf) {
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
        console.log(todoTasksToDisplay);
        root.render((<CardsBox{todoTasksToDisplay}/>));
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


    function getListOfSubtasks(){


      if(app.metadataCache == null){
        return}
      
     // const noteFrontMatter = app.metadataCache.getFileCache(TFile)?.frontmatter
    }

    async function readFileAndSplit(filePath: string) {
      let todoFile = await this.app.vault.getAbstractFileByPath(filePath);
      console.log(todoFile);
    
      if (todoFile instanceof TFile) {
        let noteContent = await this.app.vault.read(todoFile);
        const todoTasksToDisplay: string[] = noteContent.split('\n');
    
        // Log the parsed items
        todoTasksToDisplay.forEach((item) => {
          console.log(item);
        });
        return todoTasksToDisplay;
      }
    }
    
    
    
