import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/primeng";

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.component.html',
  styleUrls: ['./arvore.component.css']
})
export class ArvoreComponent implements OnInit {

  private files: {
    label: string; collapsedIcon: string; expandedIcon: string; children: (
      {
        label: string;
        collapsedIcon: string;
        expandedIcon: string;
        children: {
          label: string;
          icon: string
        }[]
      } | { label: string; collapsedIcon: string; expandedIcon: string } | { label: string; icon: string })[]
  }[];

  files1: TreeNode[];

  constructor() {
  }



  ngOnInit() {
    this.files = [
      {
        label: 'Folder 1',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open'
          },
          {
            label: 'File 1',
            icon: 'fa-file-o'
          }
        ]
      }
    ];

    this.files1 =
        [
          {
            "data": {
              "name": "Documents",
              "size": "75kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "name": "Work",
                  "size": "55kb",
                  "type": "Folder"
                },
                "children": [
                  {
                    "data": {
                      "name": "Expenses.doc",
                      "size": "30kb",
                      "type": "Document"
                    }
                  },
                  {
                    "data": {
                      "name": "Resume.doc",
                      "size": "25kb",
                      "type": "Resume"
                    }
                  }
                ]
              },
              {
                "data": {
                  "name": "Home",
                  "size": "20kb",
                  "type": "Folder"
                },
                "children": [
                  {
                    "data": {
                      "name": "Invoices",
                      "size": "20kb",
                      "type": "Text"
                    }
                  }
                ]
              }
            ]
          },
          {
            "data": {
              "name": "Pictures",
              "size": "150kb",
              "type": "Folder"
            },
            "children": [
              {
                "data": {
                  "name": "barcelona.jpg",
                  "size": "90kb",
                  "type": "Picture"
                }
              },
              {
                "data": {
                  "name": "primeui.png",
                  "size": "30kb",
                  "type": "Picture"
                }
              },
              {
                "data": {
                  "name": "optimus.jpg",
                  "size": "30kb",
                  "type": "Picture"
                }
              }
            ]
          }
        ]
    ;
  }
}
