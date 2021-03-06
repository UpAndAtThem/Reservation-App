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
    this.http.get<{message: string, tools: Tool[]}>('http://localhost:3000/api/tool/tools').subscribe((toolData) => {
      const tools = toolData.tools;
      this.tools = tools;
      this.toolsUpdated.next(tools);
    });
  }

  getToolUpdateListener() {
    return this.toolsUpdated.asObservable();
  }

  addTool(tool: Tool) {
    tool.userNeedsCert = !!tool.userNeedsCert;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:3000/api/tool/addTool', tool, httpOptions).subscribe(() => {
      this.getTools();
    });
  }

  deleteTool(toolData: Tool) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:3000/api/tool/deleteTool', toolData, httpOptions).subscribe(res => {
      console.log('deleted from after server', res);
    });

    this.tools = this.tools.filter(existingTools => {
      return existingTools._id === toolData._id ? false : true;
    });
  }

  changeEditedTool(editedTool: Tool) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.post('http://localhost:3000/api/tool/updateTool', editedTool, httpOptions).subscribe((response) => {
      console.log('this is the response', response);
    });

    const toolToReplace = this.tools.find(tool => tool._id === editedTool._id);
    Object.assign(toolToReplace, editedTool);
  }

  getToolName(toolId) {
    return this.tools.find(tool => toolId === tool._id).toolName;
  }

  getToolId(toolName) {
    return this.tools.find(tool => toolName === tool.toolName)._id;
  }
}
