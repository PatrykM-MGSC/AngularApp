import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TranslationService } from '../../services/translation-service/transaltion-service.service';

@Component({
  selector: 'app-popup-window',
  standalone: true,
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss'],
})

export class PopupWindowComponent {
  @Input({required: true}) modalTitleKey!: string;
  @Input({required: true}) modalDescriptionKey!: string;
  @Input() cancelButtonKey: string = 'cancelButton';
  @Input() confirmButtonKey: string = 'confirmButton';

  @Output() confirmAction = new EventEmitter<void>();

  constructor(private translationService: TranslationService) {}

  get modalTitle(): string {
    return this.translationService.getTranslation(this.modalTitleKey);
  }

  get modalDescription(): string {
    return this.translationService.getTranslation(this.modalDescriptionKey);
  }

  get cancelButtonText(): string {
    return this.translationService.getTranslation(this.cancelButtonKey);
  }

  get confirmButtonText(): string {
    return this.translationService.getTranslation(this.confirmButtonKey);
  }

  onConfirm() {
    this.confirmAction.emit();
  }
}
