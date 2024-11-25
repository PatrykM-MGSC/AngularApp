import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslationService } from '../../../services/translation-service/transaltion-service.service';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrl: './confirm-delete-dialog.component.css'
})

export class ConfirmDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { titleKey: string, descriptionKey: string },
    private translationService: TranslationService
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  get modalTitle(): string {
    return this.translationService.getTranslation(this.data.titleKey);
  }
  
  get modalDescription(): string {
    return this.translationService.getTranslation(this.data.descriptionKey);
  }

  get cancelButtonText(): string {
    return this.translationService.getTranslation("cancelButton");
  }

  get confirmButtonText(): string {
    return this.translationService.getTranslation("confirmButton");
  }
}
