# Overview of the Plugin Design

# Version 1 :
  ## Functionality

  ### This will allow you to schedule a "time block" or Parent event on your calendar. 
  - Within that timeblock there will be additional tasks that you have assigned to that parent
- 
  - Undetermined yet if this will be a filter of some sort or only look for children tasks. Maybe a choice? ie. "Search for all tasks in this list that have #Work"

  - Sub catagories or "mini-blocks" can be repeated and reset. i.e. a Daily set of routines you preform. (Brush hair, brush teeth, feed dogs, pack lunch)
  - Parent Events can be scheduled multiple times but all parent events identify the same "mini-block" list so that when you're in a new time block the previous items that were checked off are still checked off. 


  ### Must Have Features
  - Drag and drop functionality.
  - Event resize
  - drag events from a side panel into the day
  - 
  ## Existing plugins I'm going to use
  ### Dataview
  ### Obsidian-FullCalendar
  ### TickTick Task sync
  ### Gcal Sync

  ## Design of How I think it should function
  ## Notes about how the features will be implemented

  ### Timeblocks and Mini-blocks
  - Timeblock will be a note or node or "entity" on it's own. When it's clicked it points to anther note or node or "entity" that is defined as the child node.
  - 








# Version 2:

  ## Functionality

  ### Be able to look at several calendars or event types and filter them down based on critera. 
  - Several calendars can be part of a "Parent" Calendar. I.E. Parent: "Family".  Children: "Child 1", "Child 2", "Spouse", 
  - Events will be able to be linked to multiple calendars i.e. Child 1 and Child 2 are both going to "Daytime Event".  "Daytime Event" will be linked to both calendars, and display if either calendar is selected **BUT** Will not show duplicate if both are toggled on to show.


  ### Must Have Features
  - Have Multiple calendars show in 1 view
  - Drag and drop events for the calendars
  - Resize events with dragging functionality
  - Schedule event by clicking on the calendar
  - Toggle calendars on and off
  - Have multiple calendars linked to 1 event
  - Search for events based on event criteria (Dr. Appointments are scheduled on each calendar individaully but toggle "Dr. Appointments will show all Dr. Appointments within identified calendars")
  ## Existing plugins I'm going to use
  ## Design of How I think it should function
  ## Additonal Ideas as I think of them


  - To filter for specific items (i.e. Dr appointments) have a toggle section of #Tags that are linked or filter all events in all of the identified calendars 
    - Make a section that gives options for what calendars to show which tags. 