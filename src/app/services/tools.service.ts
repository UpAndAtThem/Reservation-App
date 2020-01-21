import { Injectable } from '@angular/core';

import { Tool } from '../models/Tool';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  toolId = 6;
  tools: Tool[] = [
    {
      toolId: 1,
      toolName: 'CNC Machine',
      toolDescription:
        // tslint:disable-next-line: max-line-length
        'A Computer numerical control (CNC) is a method for automating control of machine tools through the use of software embedded in a microcomputer attached to the tool.',
      userNeedsCert: true
    },
    {
      toolId: 2,
      toolName: '3D Printer',
      toolDescription:
        'A 3D printer is a computer-aided manufacturing (CAM) device that creates three-dimensional objects.',
      userNeedsCert: true
    },
    {
      toolId: 3,
      toolName: 'Circular Saw',
      toolDescription:
        // tslint:disable-next-line: max-line-length
        'A circular saw is a power-saw using a toothed or abrasive disc or blade to cut different materials using a rotary motion spinning around an arbor.',
      userNeedsCert: true
    },
    {
      toolId: 4,
      toolName: 'Hammer Drill',
      toolDescription:
        // tslint:disable-next-line: max-line-length
        'A Hammer Drill is a power tool used chiefly for drilling in hard materials. It is a type of rotary drill with an impact mechanism that generates a hammering motion',
      userNeedsCert: true
    },
    {
      toolId: 5,
      toolName: 'Angle Grinder',
      toolDescription:
        'An angle grinder, also known as a side grinder or disc grinder, is a handheld power tool used for grinding and polishing.',
      userNeedsCert: true
    }
  ];

  constructor() {}

  getTools(): Tool[] {
    return this.tools;
  }

  addTool(tool: Tool) {
    const toolId = this.toolId++;
    tool.toolId = toolId;
    this.tools.push(tool);
  }

  deleteTool(toolData: Tool) {
    this.tools = this.tools.filter(existingTools => {
      return existingTools.toolId === toolData.toolId ? false : true;
    });
  }

  changeEditedTool(editedTool: Tool) {
    const toolToReplace = this.tools.find(tool => tool.toolId === editedTool.toolId);
    Object.assign(toolToReplace, editedTool);
  }

  getToolName(toolId) {
    return this.tools.find(tool => toolId === tool.toolId).toolName;
  }

  getToolId(toolName) {
    return this.tools.find(tool => toolName === tool.toolName).toolId;
  }
}
