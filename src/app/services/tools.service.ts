import { Injectable } from '@angular/core';
import { Tool } from '../models/Tool';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  tools: Tool[] = [];
  private toolsUpdated = new Subject<Tool[]>();

  constructor(private http: HttpClient) {}

  getTools() {
    this.http.get<{message: string, tools: Tool[]}>('http://localhost:3000/api/tools').subscribe((toolData) => {
      const tools = toolData.tools;
      this.tools = tools;
      this.toolsUpdated.next(tools);
    });
  }

  getToolUpdateListener() {
    return this.toolsUpdated.asObservable();
  }

  addTool(tool: Tool) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:3000/api/addTool', tool, httpOptions).subscribe(() => {
      this.getTools();
    });
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
