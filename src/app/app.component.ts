import { Component } from '@angular/core';

@Component({
  selector: 'work-sample',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'work-sample';

  public isPalindrome(input: string): boolean {
    length = input.length;
    if (length < 0) {
      return false;
    }

    for (let i = 0; i <= length / 2; i++) {
      if (input[i] !== input[length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  public rotateMatrixMinus90Degree(n: number, matrix: number[][]): number[][] {
    // Cycle loop
    for (let x = 0; x < n / 2; x++) {
      // Element loop
      for (let y = x; y < n - x - 1; y++) {
        // Keep the 1st element value
        let temp = matrix[x][y];

        // Rotate -90 degree element
        // Element top-left -> top-right
        matrix[x][y] = matrix[y][n - 1 - x];

        // Element top-right -> bottom-right
        matrix[y][n - 1 - x] = matrix[n - 1 - x][n - 1 - y];

        // Element bottom-right -> bottom-left
        matrix[n - 1 - x][n - 1 - y] = matrix[n - 1 - y][x];

        // Element bottom-left -> top-right
        matrix[n - 1 - y][x] = temp;
      }
    }

    return matrix;
  }
}
