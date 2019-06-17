import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.less']
})
export class FormNestedComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      workFlowName: [null, [Validators.required]],
      workFlowType: [null, [Validators.required]],
      workFlowContent: this.fb.array([
        this.fb.group({
          stageName: [null, [Validators.required]],
          stageType: [null, [Validators.required]],
          stageContent: this.fb.array([
            this.fb.group({
              stepName: [null, [Validators.required]],
              stepType: [null, [Validators.required]],
              stepContent: this.fb.array([
                this.fb.control(null)
              ])
            })
          ]),
        })
      ])
    });
  }

  get workFlowContent() {
    return this.validateForm.get('workFlowContent') as FormArray;
  }

  ngOnInit() {
  }

  // add stage
  public addStage(): void {
    this.workFlowContent.push(
      this.fb.group({
        stageName: [null, [Validators.required]],
        stageType: [null, [Validators.required]],
        stageContent: this.fb.array([
          this.fb.group({
            stepName: [null, [Validators.required]],
            stepType: [null, [Validators.required]],
            stepContent: this.fb.array([
              this.fb.control(null)
            ])
          })
        ]),
      })
    );
  }

  // remove Workflow
  public removeStage(workflowIndex: number): void {
    this.workFlowContent.removeAt(workflowIndex);
  }

  // add stage
  public addStep(workflowIndex: number): void {
    (this.workFlowContent.at(workflowIndex).get('stageContent') as FormArray).push(
      this.fb.group({
        stepName: [null, [Validators.required]],
        stepType: [null, [Validators.required]],
        stepContent: this.fb.array([
          this.fb.control(null)
        ])
      }));
  }

  // remove stage
  removeStep(workflowIndex: number, stageIndex: number) {
    (this.workFlowContent.at(workflowIndex).get('stageContent') as FormArray).removeAt(stageIndex);
  }

  // add StepContent
  public addStepContent(stage: FormGroup) {
    (stage.get('stepContent') as FormArray).push(this.fb.control(null));
  }

  // remove StepContent
  public removeStepContent(stage: FormGroup, stepIndex: number): void {
    (stage.get('stepContent') as FormArray).removeAt(stepIndex);
  }

}
