var tttApp = angular.module('tttApp', []);
tttApp.controller('ticTacToeController', ['$scope', function ($scope) {
    
    $scope.gameType = "vs";
    // 0 --> blank
    // 1 --> x
    // -1 --> o
    $scope.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.current = 1;
    $scope.gameOver = false;
    var countOfFilledSqaues = 0;
    $scope.winner = 0;
    $scope.gameTied = false;

    $scope.resetGrid = function () {
        $scope.state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        $scope.current = 1;
        $scope.gameOver = false;
        countOfFilledSqaues = 0;
        $scope.winner = 0;
        $scope.gameTied = false;
    }

    $scope.executeTurn = function (n) {
        if ($scope.state[n] == 0 && !$scope.gameOver) {
            $scope.state[n] = $scope.current;
            countOfFilledSqaues++;
            if (countOfFilledSqaues > 4) {
                checkForWin($scope.current);
            }
            if (countOfFilledSqaues > 8 && $scope.winner == 0) {
                $scope.gameTied = true;
                $scope.gameOver = true;
            }
            $scope.current *= -1;
        }
    }

    var checkForWin = function (side) {
        if (!$scope.gameOver) {
            checkForSame(0, 1, 2, side);
        }
        if (!$scope.gameOver) {
            checkForSame(3, 4, 5, side);
        }
        if (!$scope.gameOver) {
            checkForSame(6, 7, 8, side);
        }
        if (!$scope.gameOver) {
            checkForSame(0, 3, 6, side);
        }
        if (!$scope.gameOver) {
            checkForSame(1, 4, 7, side);
        }
        if (!$scope.gameOver) {
            checkForSame(2, 5, 8, side);
        }
        if (!$scope.gameOver) {
            checkForSame(0, 4, 8, side);
        }
        if (!$scope.gameOver) {
            checkForSame(2, 4, 6, side);
        }
    }

    var checkForSame = function (a, b, c, val) {
        var win = (($scope.state[a] == val) && ($scope.state[b] == val) && ($scope.state[c] == val));
        if (win) {
            $scope.gameOver = true;
            $scope.winner = val;
        }
    }
}]);